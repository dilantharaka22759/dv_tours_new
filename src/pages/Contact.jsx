export default function Contact(){
return (
<section className="container py-5">
<h2>Contact Us</h2>
<p className="lead">Reach us for custom tours, bookings and transport inquiries.</p>


<form className="mt-3">
<div className="mb-3">
<label className="form-label">Name</label>
<input className="form-control" />
</div>
<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" className="form-control" />
</div>
<div className="mb-3">
<label className="form-label">Message</label>
<textarea className="form-control" rows={4}></textarea>
</div>
<button className="btn btn-primary">Send Message</button>
</form>
</section>
)
}