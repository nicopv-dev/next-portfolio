import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { PersonalInfo } from "@/types";
import Info from "@/components/Info";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

interface IHomeProps {
  error: boolean;
  info: PersonalInfo;
}

const Home = ({ error, info }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>Nicolas Pereira | Ingeniero Informático</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex justify-center min-h-screen">
        <div className="max-w-6xl w-full px-5 xl:px-0">
          {/* HEADER */}
          <Header cv_link={info.cv_link} />
          <div className="flex flex-col gap-10">
            {/* CONTENT */}
            <Banner university={info.university} />
            <Info />
            <Experience />
            <Projects />
            {/* <Skills /> */}
            {/* NAVEGATION */}
          </div>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const infoRef = collection(db, "personal_info");

    const snapshot = await getDocs(infoRef);
    const info = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      props: {
        error: false,
        info: info[0],
      },
    };
  } catch (err) {
    return {
      props: {
        error: true,
      },
    };
  }
};
