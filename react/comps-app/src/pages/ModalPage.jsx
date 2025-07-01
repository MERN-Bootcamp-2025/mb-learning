import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button onClick={handleClose} primary>
              I Accept
            </Button>
          }
        >
          <p>I have sent you a doc to accept.</p>
        </Modal>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit
        ea quo aliquid in, est possimus ratione, nisi magni illo placeat quam
        adipisci soluta quis repellat dolore quibusdam hic itaque voluptatibus
        ullam? Eos nulla eaque nobis illo. Deleniti, perspiciatis nulla!
        Adipisci natus iusto dolorem provident ullam assumenda a perferendis
        tenetur!
      </p>
      
    </div>
  );
};

export default ModalPage;
