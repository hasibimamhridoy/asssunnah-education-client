import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import { Bounce } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitile/SectionTitle";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Aisha Ahmed",
      image:
        "https://images.unsplash.com/photo-1569245087840-dcf487ddbad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=375&q=80",
      designation: "Student",
      review:
        "I am incredibly grateful for the education I received at Ass Sunnah School. The teachers were knowledgeable and dedicated, and they fostered a nurturing learning environment. The school's emphasis on both academics and character development has had a lasting positive impact on my life.",
    },
    {
      id: 2,
      name: "Mohammed Khan",
      image:
        "https://images.unsplash.com/photo-1618383406944-0df8186c3aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
      designation: "Student",
      review:
        "Ass Sunnah School provided me with a strong foundation in Islamic knowledge. The teachers went above and beyond to ensure we understood the material and encouraged critical thinking. The extracurricular activities also allowed me to develop leadership skills and a sense of community.",
    },
    {
      id: 3,
      name: "Fatima Ali",
      image:
        "https://images.unsplash.com/photo-1547527392-bd5d50305ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      designation: "Teacher",
      review:
        "Attending Ass Sunnah School was a transformative experience for me. The supportive environment and engaging curriculum helped me deepen my understanding of Islam. The school instilled in me a love for learning and a commitment to serving others. I highly recommend it!",
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      image:
        "https://images.unsplash.com/photo-1605506412358-303da9ea238a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      designation: "Teacher",
      review:
        "Ass Sunnah School exceeded my expectations. The teachers not only taught us the theoretical aspects but also encouraged practical application of Islamic teachings. The school's emphasis on inclusivity and respect for diverse perspectives made it a truly enriching educational journey.",
    },
    {
      id: 5,
      name: "Sarah Abdullah",
      image:
        "https://images.unsplash.com/photo-1545266241-3516e2a6e016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      designation: "Student",
      review:
        "I consider myself fortunate to have attended Ass Sunnah School. The caring teachers created a supportive atmosphere that made learning enjoyable. The school's comprehensive curriculum and emphasis on character development equipped me with the knowledge and values necessary for success in both this life and the hereafter.",
    },
  ];

  return (
    <div className="">
      <div className="text-center mt-16 my-10">
        <Bounce>
          <SectionTitle
            clrTitle="Reviews"
            subTitle="from student"
          ></SectionTitle>
        </Bounce>
      </div>

      <Marquee>
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.id}
              image={review.image}
              name={review.name}
              designation={review.designation}
              review={review.review}
            ></ReviewCard>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Reviews;
