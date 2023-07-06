import React from "react";
import { Link } from "react-router-dom";

export default function Career() {

    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/"></Link>
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/06/UIUX_GD.jpg" className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/">Graphic Designer vs. UI/UX Designer: Key Differences You Should Know</Link></p>
        <p className="card-text">It has always been confusing for people to understand the key differences between Graphic designers</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/graphic-designer-vs-ui-ux-designer/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">2 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/what-is-production-management/"></Link>
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/06/what-is-production-management.jpg" className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/what-is-production-management/">What is Production Management | The Ultimate Guide</Link></p>
        <p className="card-text">In today’s constantly evolving business landscape, production managers are essential to the success of any</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/what-is-production-management/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">1 July 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/career-options-in-india/"></Link>
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/06/top-career-options-in-india-1536x864.jpg" className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/career-options-in-india/">Top Career Options in India in 2023

</Link></p>
    <p className="card-text">In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/career-options-in-india/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">27 June 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>


    </div>
    )
}