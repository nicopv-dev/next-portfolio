import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { CV } from "@/types";

interface IHomeProps {
  error: boolean;
  cv: CV;
}

const Home = ({ error, cv }: IHomeProps) => {
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
          <Header cv_link={cv.cv_link} />
          {/* CONTENT */}
          <Banner />
          {/* NAVEGATION */}
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const infoRef = collection(db, "cv");

    const snapshot = await getDocs(infoRef);
    const cvs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      props: {
        error: false,
        cv: cvs[0],
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
