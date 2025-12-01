import { TOURS } from '../data/tours'
import TourCard from '../components/TourCard'


export default function Tours(){
return (
<section className="container py-5">
<h2 className="mb-4">All Tours</h2>
<div className="row">
{TOURS.map(t=> <TourCard tour={t} key={t.id} />)}
</div>
</section>
)
}