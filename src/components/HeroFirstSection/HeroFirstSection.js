import { Button } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import useWindowSize from "../../utils/useWindowSize";

function HeroFirstSection({ data }) {
  const { width } = useWindowSize();

  return (
    <div className="bg-black h-full text-white p-6 md:p-12 rounded-3xl overflow-hidden relative">
      <div>
        <div>
          <p>{data?.subtitle}</p>
          <h1 className="md:text-head2 ">{data?.title}</h1>
          <Button
            size={width < 768 ? "sm" : "lg"}
            style={{
              backgroundColor: "rgb(255, 92,0)",
              border: "none",
              borderRadius: "25px",
              marginTop: "20px",
            }}
          >
            <span className="flex items-center">
              Get Started For Free
              <span className="ml-2">
                <FaArrowCircleRight height={5} width={5} />
              </span>
            </span>
          </Button>
        </div>
        {width > 768 ? (
          <div>
            <figure className="absolute left-0 w-full -bottom-35">
              <img className="w-full" src="/hero/laptop.png" alt="laptop" />
            </figure>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default HeroFirstSection;
