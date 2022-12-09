import { useRef } from 'react';

const HotelSearchForm = () => {
  const whereInputRef = useRef();
  const dateInInputRef = useRef();
  const dateOutInputRef = useRef();
  const numberPeopleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredWhere = whereInputRef.current.value;
    const enteredDateIn = dateInInputRef.current.value;
    const enteredDateOut = dateOutInputRef.current.value;
    const enteredNumberPeople = numberPeopleInputRef.current.value;

    const hotelData = {
      where: enteredWhere,
      dateIn: enteredDateIn,
      dateOut: enteredDateOut,
      numberPeople: enteredNumberPeople,
    };
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor="where">Where do you want to go?</label>
        <input type="text" required id="where" ref={whereInputRef} />
      </div>
      <div className='flex'>
        <div className='control'>
          <label htmlFor="when">When do you want to go?</label>
          <div className='flex'>
          <input type="date" required id="dateIn" ref={dateInInputRef} />
          <input type="date" required id="dateOut" ref={dateOutInputRef} />
          </div>
        </div>
        <div className='control'>
          <label htmlFor="numberPeople">How many people will you be?</label>
          <input
            type="text"
            required
            id="numberPeople"
            ref={numberPeopleInputRef}
          />
        </div>
      </div>
      <button className='cardButton'>Search</button>
    </form>
  );
};

export default HotelSearchForm;
