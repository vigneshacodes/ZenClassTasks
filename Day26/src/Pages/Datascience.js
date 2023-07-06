import React from "react";
import { Link } from "react-router-dom";

export default function Datascience() {

    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
    <div className="card h-100">
    <div>
    <Link className="nav-link" to="https://www.guvi.in/blog/vmware-vs-virtualbox/"></Link>
      <img src="https://www.guvi.in/blog/wp-content/uploads/2023/06/VMWARE-Vs-VIRTUAL-BOX-1536x864.png" className="card-img-top" alt="..." />
    </div>
      <div className="card-body">
        <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/vmware-vs-virtualbox/">VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation.</Link></p>
        <p className="card-text">In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has emerged</p>
        <p><Link className="nav-link read" to="https://www.guvi.in/blog/vmware-vs-virtualbox/">READ MORE » </Link></p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary d-inline-flex w-100 text-align-left">27 June 2023  <ul><li>No Comments</li></ul></small>
      </div>
    </div>
  </div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/mistakes-to-avoid-when-you-begin-a-data-science-career/"></Link>
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp" className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/mistakes-to-avoid-when-you-begin-a-data-science-career/">8 Mistakes To Avoid When You Begin a Data Science Career</Link></p>
    <p className="card-text">With leading modern-day companies relying on Data Science professionals to make more informed decisions and</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/mistakes-to-avoid-when-you-begin-a-data-science-career/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">15 May 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
<div className="col">
<div className="card h-100">
<div>
<Link className="nav-link" to="https://www.guvi.in/blog/data-science-vs-machine-learning-must-know-facts/"></Link>
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/04/image-5.png" className="card-img-top" alt="..." />
</div>
  <div className="card-body">
    <p className="card-title"><Link className="nav-link" to="https://www.guvi.in/blog/data-science-vs-machine-learning-must-know-facts/">Data Science vs. Machine Learning: What every elite coder needs to know</Link></p>
    <p className="card-text">As the world becomes increasingly data-driven, the demand for professionals who can analyze and interpret</p>
    <p><Link className="nav-link read" to="https://www.guvi.in/blog/data-science-vs-machine-learning-must-know-facts/">READ MORE » </Link></p>
  </div>
  <div className="card-footer">
    <small className="text-body-secondary d-inline-flex w-100 text-align-left">4 April 2023  <ul><li>No Comments</li></ul></small>
  </div>
</div>
</div>
</div>

    </div>
    )
}