import "./styles/About.scss";
import camping from '../assets/camping.svg'
import { BiMinusCircle, BiPlusCircle} from "react-icons/bi";
import { useState } from "react";

export default function About() {
  const [itemOne, setItemOne] = useState(false)
  const [itemTwo, setItemTwo] = useState(false)
  const [itemThree, setItemThree] = useState(false)
  const [itemFour, setItemFour] = useState(false)
  const [itemFive, setItemFive] = useState(false)
  const [itemSix, setItemSix] = useState(false)

  const toggleItem = (id) => {
    id == 1 && setItemOne(!itemOne)
    id == 2 && setItemTwo(!itemTwo)
    id == 3 && setItemThree(!itemThree)
    id == 4 && setItemFour(!itemFour)
    id == 5 && setItemFive(!itemFive)
    id == 6 && setItemSix(!itemSix)
  }

  return (
    <div className="about">

      <div className="hero">
        <img src={camping} alt="camping illustration" />
        <div className="title">
          <h2>Learn about Us</h2>
          <h1>by Reading our Story</h1>
        </div>
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

      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-undertext">( FaQ )</p>

      <div className="accordion">

        <div className="accordion-item">
          <div className="label"><p>Can I cancel my booking?</p> <button onClick={() => toggleItem(1)}>{!itemOne ? <BiPlusCircle className="Switch" /> : <BiMinusCircle className="Switch" />}</button></div>

          {itemOne ? (
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
          ) : null}
        </div>

        <div className="accordion-item">
          <div className="label"><p>On what occasions is it possible to get a refund?</p> <button onClick={() => toggleItem(2)}>{!itemTwo ? <BiPlusCircle className="Switch" /> : <BiMinusCircle className="Switch" />}</button></div>

          {itemTwo ? (
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
          ) : null}
        </div>

        <div className="accordion-item">
          <div className="label"><p>How does the business team offer work?</p> <button onClick={() => toggleItem(3)}>{!itemThree ? <BiPlusCircle className="Switch" /> : <BiMinusCircle className="Switch" />}</button></div>

          {itemThree ? (
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
          ) : null}
        </div>

        <div className="accordion-item">
          <div className="label"><p>Are there any open positions at Holidaze?</p> <button onClick={() => toggleItem(4)}>{!itemFour ? <BiPlusCircle className="Switch" /> : <BiMinusCircle className="Switch" />}</button></div>

          {itemFour ? (
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
          ) : null}
        </div>

        <div className="accordion-item">
          <div className="label"><p>How do I open an account to list my own hotel?</p> <button onClick={() => toggleItem(5)}>{!itemFive ? <BiPlusCircle className="Switch" /> : <BiMinusCircle className="Switch" />}</button></div>

          {itemFive ? (
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
          ) : null}
        </div>

        <div className="accordion-item">
          <div className="label"><p>Can I reschedule a booking?</p> <button onClick={() => toggleItem(6)}>{!itemSix ? <BiPlusCircle className="Switch" /> : <BiMinusCircle className="Switch" />}</button></div>

          {itemSix ? (
          <div className="content"><p>Voluptatem quaerat non architecto ab
          laudantium modi minima sunt esse temporibus sint culpa, recusandae
          aliquam numquam totam ratione voluptas quod exercitationem fuga.</p></div>
          ) : null}
        </div>

      </div>  

    </div>
  );
}
