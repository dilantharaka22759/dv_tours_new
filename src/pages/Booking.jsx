import { useLocation } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import { TOURS } from '../data/tours'


export default function Booking(){
const loc = useLocation()
const tourId = loc.state?.tourId
const tour = TOURS.find(t=>t.id===tourId)


return (
<section className="container py-5">
<h2 className="mb-4">Booking</h2>
<div className="row">
<div className="col-md-7">
<BookingForm defaultTour={tour?.title}/>
</div>
<div className="col-md-5">
<div className="card p-3">
<h5>Booking Summary</h5>
{tour ? (
<>
<p className="mb-1">Tour: <strong>{tour.title}</strong></p>
<p className="mb-1">Price per person: <strong>${tour.price}</strong></p>
<p className="text-muted small">We will contact you to confirm availability.</p>
</>
) : (
<p className="text-muted">No tour selected. You can still request a booking.</p>
)}
</div>
</div>
</div>
</section>
)
}