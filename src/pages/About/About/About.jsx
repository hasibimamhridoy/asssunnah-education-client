import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import useAuth from "../../../hooks/useAuth";

const About = () => {
  const { isDark } = useAuth();

  return (
    <div>
      <div className="flex justify-center lg:mt-16 lg:mb-10 mb-6 mt-10">
        <SectionTitle clrTitle="About" subTitle="Page"></SectionTitle>
      </div>

      <section className={`${isDark ? "text-white" : " text-gray-900"}`}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              Ass Sunnah Islamic Education School is a renowned institution
              dedicated to providing high-quality Islamic education to students.
              Founded in [insert year of foundation], the school is located in
              [insert location] and has since become a prominent center for
              learning and cultivating a deep understanding of the Islamic
              faith.
            </p>
            <p>
            Ass Sunnah Islamic Education School places great emphasis on academic excellence and character development. The dedicated faculty consists of qualified Islamic scholars and educators who employ modern teaching methodologies to engage students effectively.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1632054632263-a5d21f13b600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1589186222872-418c38954ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
