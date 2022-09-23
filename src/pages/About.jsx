import "./styles/About.scss";
import camping from '../assets/camping.svg'

export default function About() {
  return (
    <div className="about">

      <div className="hero">
        <img src={camping} alt="camping illustration" />
        <h1>Learn about Us</h1>
        <h1>By Reading our Story</h1>
      </div>

      <div className="description">
        <p>
          Commodi minima excepturi repudiandae velit hic maxime doloremque.
          Quaerat provident commodi consectetur veniam similique ad earum omnis
          ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat,
          dolorum eligendi quam cupiditate excepturi mollitia maiores labore
          suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.
        </p>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié.
        </p>
      </div>

      <h1>Frequently Asked Questions</h1>
      <p>( FaQ )</p>

      <div className="accordion">

        <div className="accordion-item">
          <div className="label"><p>Can I cancel my booking?</p> <button>+</button></div>
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
        </div>

        <div className="accordion-item">
          <div className="label"><p>On what occasions is it possible to get a refund?</p> <button>+</button></div>
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
        </div>

        <div className="accordion-item">
          <div className="label"><p>How does the business team offer work?</p> <button>+</button></div>
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
        </div>

        <div className="accordion-item">
          <div className="label"><p>Are there any open positions at Holidaze?</p> <button>+</button></div>
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
        </div>

        <div className="accordion-item">
          <div className="label"><p>How do I open an account to list my own hotel?</p> <button>+</button></div>
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
        </div>

        <div className="accordion-item">
          <div className="label"><p>Can I reschedule a booking?</p> <button>+</button></div>
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
        </div>

      </div>  

    </div>
  );
}
