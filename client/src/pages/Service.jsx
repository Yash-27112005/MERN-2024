import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  // Check if services is undefined or not an array
  if (!Array.isArray(services)) {
    // If services is undefined or not an array, return null or some fallback content
    return null; // or return a message indicating that services are not available
  }

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((curElem, index) => {
            const { price, description, provider, service } = curElem;
            return (
              <div className="card" key={index}>
                {" "}
                {/* Added key prop */}
                <div className="card-img">
                  <img src="./images/design.png" alt="services" width="200" />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
