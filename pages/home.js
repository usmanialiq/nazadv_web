import SEO from '@/src/common/SEO';
import HomeComponent from '@/src/components/Home';

export default function Home() {
  return (
    <>
      <SEO 
        title='Ecommerce.co - Brand store for Clothes' 
        desc='Ipsum voluptate tempor tempor nisi pariatur tempor commodo excepteur laboris nostrud non tempor. Culpa Lorem non eiusmod ullamco mollit ad irure occaecat velit irure anim qui qui. Laboris magna sint anim ullamco id. Pariatur minim veniam irure sint proident. Do ullamco elit exercitation velit proident commodo eu adipisicing officia do aliquip id. Lorem veniam enim voluptate elit consectetur exercitation duis.'
        route='/home'
      />
      <HomeComponent />
    </>
  )
}
