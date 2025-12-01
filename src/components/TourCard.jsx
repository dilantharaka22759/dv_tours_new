import { Link } from 'react-router-dom'


export default function TourCard({tour}){
return (
<div className="col-md-4 mb-4">
<div className="card card-hover h-100">
<img src={tour.img} className="card-img-top" alt={tour.title} />
<div className="card-body d-flex flex-column">
<h5 className="card-title">{tour.title}</h5>
<p className="card-text text-muted">{tour.short}</p>
<div className="mt-auto d-flex justify-content-between align-items-center">
<div className="fw-bold">${tour.price}</div>
<Link to={`/tours/${tour.id}`} className="btn btn-outline-primary btn-sm">View</Link>
</div>
</div>
</div>
</div>
)
}