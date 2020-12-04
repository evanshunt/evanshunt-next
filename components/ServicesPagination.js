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
          <Link href={prevRoute}>
            <a className="pagination prev">
              <img src="/images/arrow-left-lg-black.svg" alt="" className="black-arrow" />
              <img src="/images/arrow-left-lg-white.svg" alt="" className="white-arrow" />
              <p className="page-name">{prevRoute}</p>
            </a>
          </Link>
        </div>
        <div className="pg-flex-col">
          <Link href={nextRoute}>
            <a className="pagination next">
              <p className="page-name">{nextRoute}</p>
              <img src="/images/arrow-right-lg-black.svg" alt="" className="black-arrow" />
              <img src="/images/arrow-right-lg-white.svg" alt="" className="white-arrow" />
            </a>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ServicesPagination;
