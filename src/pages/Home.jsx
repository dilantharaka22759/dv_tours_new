import { Link } from 'react-router-dom';
import { TOURS } from '../data/tours';
import TourCard from '../components/TourCard';

export default function Home() {
  return (
    <>
      <header className="hero mb-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Explore Sri Lanka with DV Tours</h1>
          <p className="lead">
            Custom tours, comfortable transport, and friendly guides.
          </p>
          <Link to="/tours" className="btn btn-lg btn-primary mt-3">
            View Tours
          </Link>
        </div>
      </header>

      <section className="container py-4">
        <h2 className="mb-4">Popular Tours</h2>
        <div className="row">
          {TOURS.map((t) => (
            <TourCard tour={t} key={t.id} />
          ))}
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container text-center">
          <h3>Why choose DV Tours?</h3>
          <p className="text-muted">
            Local experts, fair prices, and tailored itineraries.
          </p>
        </div>
      </section>
    </>
  );
}
