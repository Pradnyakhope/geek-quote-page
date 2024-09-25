
import './App.css';
import './Quote.css';
import Header from './Header';
import Quote from './Quote';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header/>
      <div className="quote-container">   
        
      <Quote  data="Its amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you cant go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding"
              title="Adam Scott" />

      <Quote  data="Eat breakfast like a king, lunch like a prince, and dinner like a pauper."
              title="Adelle Davis" />

      <Quote  data="We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are."
              title="Adelle Davis" />

      <Quote  data="Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet."
              title="Albert Einstein" />

      <Quote  data="Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth."
              title="Alice May Brock" />

      <Quote  data="Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person Your fatness is an affront to me so we have the right to treat you as offensively as you appear Fat is not merely viewed as another type of tissue but as a diagnostic sign a personal statement and a measure of personality Too little fat and we see you as being antisocial fearful and sexless Too much fat and we see you as slothful stupid and sexually hung up"
              title="Anthelme Brillat-Savarin" />   

      <Quote  data="Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!"
              title="Calvin Trillin" />   

      <Quote  data="Tell me what you eat, and I will tell you what you are."
              title="Cyra McFadden" />  

      <Quote  data="Health food makes me sick."
              title="Eike von Repkow" />  

      <Quote  data="The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found."
              title="Epictetus" />  

      <Quote  data="I no longer prepare food or drink with more than one ingredient."
              title="Epictetus" />  
              </div>
            
      
      {/* <Content/> */}
      {/* <Card/> */}
      <Footer/>
    </div>
  )
    
};

export default App
