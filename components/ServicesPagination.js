import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ServicesPagination = ({ title, routes }) => {
  const [prevRoute, setPrevRoute] = useState("");
  const [nextRoute, setNextRoute] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  // create pagination
  useEffect(() => {
    // First route in list
    if (routes.indexOf(slug) === 0) {
      setNextRoute(routes[1]);
      setPrevRoute(routes[routes.length - 1]);
    } else if (routes.indexOf(slug) === routes.length - 1) {
      setNextRoute(routes[0]);
      setPrevRoute(routes[routes.indexOf(slug) - 1]);
    } else {
      setNextRoute(routes[routes.indexOf(slug) + 1]);
      setPrevRoute(routes[routes.indexOf(slug) - 1]);
    }
  }, [routes, slug]);

  return (
    <section className="services-pagination container-medium">
      {title && <h3>{title}</h3>}

      <div className="pg-flex">
        <div className="pg-flex-col">
          <Link href={prevRoute} legacyBehavior>
            <a className="pagination prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 16"
                className="svg-arrow-left"
              >
                <path
                  className="arrow-left arrow"
                  d="M0,8a1.16,1.16,0,0,0,.38.87L7.85,16l2-1.73-5.25-5H32V6.74H4.63l5.25-5L7.85,0,.38,7.13A1.33,1.33,0,0,0,0,8Z"
                  transform="translate(0 0)"
                />
              </svg>
              <p className="page-name label">{prevRoute}</p>
            </a>
          </Link>
        </div>
        <div className="pg-flex-col">
          <Link href={nextRoute} legacyBehavior>
            <a className="pagination next">
              <p className="page-name label">{nextRoute}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 16"
                className="svg-arrow-right"
              >
                <path
                  className="arrow-right arrow"
                  d="M31.62,7.13,24.15,0l-2,1.73,5.25,5H0V9.26H27.37l-5.25,5,2,1.73,7.47-7.13A1.16,1.16,0,0,0,32,8,1.33,1.33,0,0,0,31.62,7.13Z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPagination;
