import Header from '@/app/components/Header';
import Main from '@/app/components/Main';
import SectionAbout from '@/app/components/SectionAbout';
import SectionProducts from '@/app/components/SectionProducts';
import SectionForm from '@/app/components/SectionForm';
import Footer from '@/app/components/Footer';




export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <SectionAbout />
      <SectionProducts />
      <SectionForm />
      <Footer />
    </div>
  );
}
