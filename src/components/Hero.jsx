import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">2022</span>{" "}Гуманитарно-Педагогическая Академия{" "}
            <span className="text-white">Ялта</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 style={{
              width: '610px'
          }} className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Кибергении <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Идея меняет мир</span>{" "}
          </h1>
          {/*<div className="ss:flex hidden md:mr-4 mr-0">*/}
          {/*  <GetStarted />*/}
          {/*</div>*/}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          ГПА-Ялта
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Наша команда экспертов покоряет вершины IT. Используем простые решения для сложных проблем.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
