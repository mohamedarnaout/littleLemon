import star from "../../media/star.png";
function Testimonial(props) {
  return (
    <div className="testimonial">
      <img className="testimonial_pic" src={props.img} alt="persons pic" />
      <div className="testimonial-con">
        <h3 className="testimonial_heading">{props.rating} stars</h3>
        <img src={star} alt="star logo" className="testimonial-con-logo" />
      </div>

      <p className="testimonial_par">{props.description}</p>
    </div>
  );
}

export default Testimonial;
