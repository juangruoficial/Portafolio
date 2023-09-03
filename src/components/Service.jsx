import { useState } from "react";
import ServicePopup from "./popup/ServicePopup.jsx";
import { serviceData } from "../shared/constServiceData";

const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <section className="section" id="service">
        <section className="service">
          <section className="container">
            <section className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li key={i}>
                    <section className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[1].substring(0, 138)}.
                      </p>
                      <a
                        className="full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="/images/service/1.jpg"
                        alt=""
                      />
                    </section>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
export default Service;
