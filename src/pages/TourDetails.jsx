import { useParams, Link } from 'react-router-dom'
import { TOURS } from '../data/tours'


export default function TourDetails(){
const { id } = useParams()
const tour = TOURS.find(t=> t.id===id)
if(!tour) return <div className="container py-5">Tour not found</div>


return (
<section className="container py-5">
<div className="row">
<div className="col-md-6">
<img src={tour.img} className="img-fluid rounded" alt={tour.title} />
</div>
<div className="col-md-6">
<h2>{tour.title}</h2>
<p className="text-muted">{tour.short}</p>
<p>{tour.details}</p>
<div className="d-flex gap-3 align-items-center">
<div className="fs-4 fw-bold">${tour.price}</div>
<Link to="/booking" state={{tourId: tour.id}} className="btn btn-primary">Book Now</Link>
</div>
</div>
</div>
</section>
)
}