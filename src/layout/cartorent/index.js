import React, { useState, useCallback } from "react";
import { Card, Modal } from "../../components";
import moment from "moment/moment";
import "moment/locale/id";
moment().locale("id");
import ImageViewer from "react-simple-image-viewer";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const { vehicles, itemToShow, filterBy, admin } = props;

  const [showModal, setShowModal] = React.useState(false);
  const [tickectProps, setTicketProps] = React.useState(null);
  const [images, setImages] = React.useState(null);
  const [showPreview, setShowPreview] = React.useState(false);
  const [values, setValue] = React.useState({
    name: "",
    phoneNumber: "",
    rentStartDate: "",
    totalDays: "",
    pickUpPlace: "",
    time: "",
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState([]);

  const handleChange = (prop) => (event) => {
    setValue({ ...values, [prop]: event.target.value });
  };

  function booking(props) {
    setShowModal(!showModal);
    console.log(props);
    setTicketProps(props);
  }

  function sendWA() {
    const phoneNumber =
      admin.data[Math.floor(Math.random() * admin.data.length)];

    window.open(
      `https://wa.me/${phoneNumber.wa_number}?text=Informasi%20pemesanan%20%3A%0A%E2%80%A2%20Nama%20%3A%20${values.name}%0A%E2%80%A2%20Jenis%20Unit%20%3A%20${tickectProps.brand}(${tickectProps.name})%0A%E2%80%A2%20Alamat%20Jemput%20%3A%20${values.pickUpPlace}%0A%E2%80%A2%20Tanggal%20%3A%20${values.rentStartDate}%0A%E2%80%A2%20Jumlah%20Hari%20%3A%20${values.totalDays}%0A%E2%80%A2%20Whatsapp%20%3A%20${values.phoneNumber}%0A%0AKami%20akan%20segera%20konfirmasi%20jika%20Kendaraan%20tersedia.%20%0ATrimakasih.%0Aborneotrans.com`,
      "_blank"
    );
  }
  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("DD/MM/YYYY");
    setValue({ ...values, rentStartDate: newDate });
  };

  const showImage = (images) => {
    let image = [];
    console.log(imageToShow);
    setImageToShow([]);
    const cpImageToShow = [...imageToShow];
    JSON.parse(images)?.forEach((img) => {
      image.push(`${assets_url}/vehicles/${img}`);
    });
    setImageToShow(image);
    openImageViewer(0);
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={`max-w-5xl mx-auto mt-10`}>
      {isViewerOpen && (
        <ImageViewer
          src={imageToShow}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <div
        className={`grid m-auto grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2`}
      >
        {vehicles?.data
          .filter((car) =>
            filterBy === "Bus"
              ? car.maintype === ""
              : car.maintype === "Mini Bus"
          )
          ?.slice(0, itemToShow ?? vehicles.length)
          .sort((a, b) => (a.availability && b.availability ? null : -1))
          .map((vehicle, index) => {
            let images = JSON.parse(vehicle?.thumbnail);

            return (
              <>
                {/* {images} */}
                <Card
                  key={`vehicle-${index}`}
                  name={vehicle?.name}
                  brand={vehicle?.brand}
                  availability={vehicle?.available}
                  price={vehicle?.price_per_day}
                  owndriven={vehicle?.own_driving}
                  maintype={vehicle?.maintype}
                  image={images[Math.floor(Math.random() * images.length)]}
                  onClick={() => booking(vehicle)}
                  onImageClick={() => showImage(vehicle?.thumbnail)}
                />
              </>
            );
          })}
      </div>
      <Modal
        show={showModal}
        setModalClose={() => {
          setShowModal(!showModal);
        }}
        title={`Rental Mobil`}
        width={"1/2"}
        onSubmit={() => sendWA()}
        cb={() => sendWA()}
      >
        <form>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Nama Pemesan
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nama Pemesan"
            value={values.name}
            onChange={handleChange("name")}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Nomor Handphone
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nomor Handphone"
            value={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Lokasi Penjemputan
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Lokasi Penjemputan"
            value={values.pickUpPlace}
            onChange={handleChange("pickUpPlace")}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Tanggal Penjemputan
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            placeholder="Jumlah Ticket"
            value={values.totalTicket}
            onChange={onChangeDate}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Jumlah hari pemakaian
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Jumlah Hari Pemakaian"
            value={values.totalTicket}
            onChange={handleChange("totalDays")}
            required
          />
        </form>
        <div className="flex flex-col mt-4">
          <span className="font-bold">Detail Rental dan Kendaraan</span>
          <span className="text-sm mt-2">Detail Kendaraan</span>
          <span className="font-semibold">
            {tickectProps?.brand} ( {tickectProps?.name} )
          </span>
        </div>
      </Modal>
    </div>
  );
}
