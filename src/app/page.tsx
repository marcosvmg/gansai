import Main from '@/app/components/Main';
import SectionAbout from '@/app/components/SectionAbout';
import SectionProducts from '@/app/components/SectionProducts';
import SectionForm from '@/app/components/SectionForm';




export default function Home() {
  return (
    <div>
      <Main />
      <SectionAbout />
      <SectionProducts />
      <SectionForm />
    </div>
  );
}
