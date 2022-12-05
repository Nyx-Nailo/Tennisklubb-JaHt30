import Calendar from 'react-calendar';
import { useState } from 'react';
/*import 'react-calendar/dist/Calendar.css';*/


function Home() {
    return (
        <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum. Id interdum velit laoreet
                    id. Donec enim diam vulputate ut. Est pellentesque elit ullamcorper dignissim cras tincidunt. Felis
                    imperdiet proin fermentum leo vel orci. Cras adipiscing enim eu turpis egestas pretium. Volutpat lacus
                    laoreet non curabitur gravida arcu. Purus in massa tempor nec feugiat nisl pretium. Facilisis sed
                    odio morbi quis commodo odio aenean sed. Ac turpis egestas maecenas pharetra convallis. Morbi tristique
                    senectus et netus et malesuada fames. Erat imperdiet sed euismod nisi porta. Lorem ipsum dolor sit amet
                    consectetur. Amet cursus sit amet dictum sit amet. Libero justo laoreet sit amet cursus sit amet dictum
                    sit. Risus sed vulputate odio ut enim blandit. Quam adipiscing vitae proin sagittis nisl. Diam maecenas
                    sed enim ut. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                </p>
        </>
        );
}

function OmklInfo() {
    return (
        <>
            <h1>Omklädningsrum</h1>
            <p>
                Nascetur ridiculus mus mauris vitae ultricies leo. Scelerisque fermentum dui faucibus in ornare quam
                viverra. Quis auctor elit sed vulputate mi sit. Dui faucibus in ornare quam viverra orci sagittis. Aenean
                et tortor at risus. Purus non enim praesent elementum facilisis leo vel fringilla. In hendrerit gravida
                rutrum quisque non tellus orci ac. Amet facilisis magna etiam tempor orci eu lobortis elementum. Enim nunc
                faucibus a pellentesque sit. Dictum fusce ut placerat orci nulla pellentesque dignissim. Platea dictumst
                quisque sagittis purus sit amet volutpat consequat. Magna fringilla urna porttitor rhoncus dolor. Ultricies
                lacus sed turpis tincidunt id aliquet risus feugiat in. Laoreet sit amet cursus sit. Risus in hendrerit
                gravida rutrum. Amet dictum sit amet justo donec enim diam vulputate ut.
            </p>
        </>
    );
}

function BastuInfo() {
    return (
        <>
            <h1>Bastu</h1>
            <p>
                Nascetur ridiculus mus mauris vitae ultricies leo. Scelerisque fermentum dui faucibus in ornare quam
                viverra. Quis auctor elit sed vulputate mi sit. Dui faucibus in ornare quam viverra orci sagittis. Aenean
                et tortor at risus. Purus non enim praesent elementum facilisis leo vel fringilla. In hendrerit gravida
                rutrum quisque non tellus orci ac. Amet facilisis magna etiam tempor orci eu lobortis elementum. Enim nunc
                faucibus a pellentesque sit. Dictum fusce ut placerat orci nulla pellentesque dignissim. Platea dictumst
                quisque sagittis purus sit amet volutpat consequat. Magna fringilla urna porttitor rhoncus dolor. Ultricies
                lacus sed turpis tincidunt id aliquet risus feugiat in. Laoreet sit amet cursus sit. Risus in hendrerit
                gravida rutrum. Amet dictum sit amet justo donec enim diam vulputate ut.
            </p>
        </>
        );
}

function Bastu() {
    const [date, onChangeDate] = useState(new Date());
    const [time, onChangeTime] = useState("10:00-11:00");
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(date.toLocaleDateString("sv", options) + " " + time);
    }

    return (
        <div id="Booking">
            <h2>Boka Bastu</h2>
            <div id="Calendar" >
                <h4>Datum</h4>
                <Calendar onChange={onChangeDate} value={date} minDate={today} maxDate={maxDate} locale="sv" />
            </div>
            <div id="Times">
                <h4>Tider</h4>
                <div id="BookingTimeSolts">
                    <input type="button" value="10:00-11:00" onClick={() => onChangeTime("10:00-11:00")} />
                    <input type="button" value="11:00-12:00" onClick={() => onChangeTime("11:00-12:00")} />
                    <input type="button" value="12:00-13:00" onClick={() => onChangeTime("12:00-13:00")} />
                    <input type="button" value="13:00-14:00" onClick={() => onChangeTime("13:00-14:00")} />
                    <input type="button" value="14:00-15:00" onClick={() => onChangeTime("14:00-15:00")} />
                    <input type="button" value="15:00-16:00" onClick={() => onChangeTime("15:00-16:00")} />
                    <input type="button" value="16:00-17:00" onClick={() => onChangeTime("16:00-17:00")} />
                    <input type="button" value="17:00-18:00" onClick={() => onChangeTime("17:00-18:00")} />
                    <input type="button" value="18:00-19:00" onClick={() => onChangeTime("18:00-19:00")} />
                    <input type="button" value="19:00-20:00" onClick={() => onChangeTime("19:00-20:00")} />
                    <input type="button" value="20:00-21:00" onClick={() => onChangeTime("20:00-21:00")} />
                </div>
            </div>
            <div id="Info">
                <h4>Info</h4>
                <h5>{date.toLocaleDateString("sv", options)}</h5>
                <h5>{time}</h5>
                <form id="nyBokning" onSubmit={onSubmitHandler}>
                    <label for="fname">Förnamn </label>
                    <input type="text" id="fname" name="fname" placeholder="Förnamn" title="Skriv in ditt namn" pattern="\b([A-ÖÀ-ÿ][-,a-ö. ']+[ ]*)" required />
                    <label for="lname">Efternamn </label>
                    <input type="text" id="lname" name="lname" placeholder="Efternamn" title="Skriv in ditt namn" pattern="\b([A-ÖÀ-ÿ][-,a-ö. ']+[ ]*)" required />
                    <label for="number">Telefonnummer </label>
                    <input type="text" id="number" name="number" placeholder="070-1234567" title="Skriv in ditt mobilnummer" pattern="[0-9]{3}[-][0-9]{7}" required />
                    <label for="email">E-mail </label>
                    <input type="email" id="email" name="email" placeholder="email@domain.se" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Email behöver ett @ följt av en domän." required />
                    <div></div>
                    <input type="submit" id="submit" value="Boka tid"></input>
                </form>

            </div>
        </div>
    );
}

function Banor() {
    const [date, onChangeDate] = useState(new Date());
    const [time, onChangeTime] = useState("10:00-11:00");
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(date.toLocaleDateString("sv", options) + " " + time);
    }

    return (
        <div id="Booking">
            <h2>Boka Bana</h2>
            <div id="Calendar" >
                <h4>Datum</h4>
                <Calendar onChange={onChangeDate} value={date} minDate={today} maxDate={maxDate} locale="sv" />
            </div>
            <div id="Times">
                <h4>Tider</h4>
                <div id="BookingTimeSolts">
                    <input type="button" value="10:00-11:00" onClick={() => onChangeTime("10:00-11:00")} />
                    <input type="button" value="11:00-12:00" onClick={() => onChangeTime("11:00-12:00")} />
                    <input type="button" value="12:00-13:00" onClick={() => onChangeTime("12:00-13:00")} />
                    <input type="button" value="13:00-14:00" onClick={() => onChangeTime("13:00-14:00")} />
                    <input type="button" value="14:00-15:00" onClick={() => onChangeTime("14:00-15:00")} />
                    <input type="button" value="15:00-16:00" onClick={() => onChangeTime("15:00-16:00")} />
                    <input type="button" value="16:00-17:00" onClick={() => onChangeTime("16:00-17:00")} />
                    <input type="button" value="17:00-18:00" onClick={() => onChangeTime("17:00-18:00")} />
                    <input type="button" value="18:00-19:00" onClick={() => onChangeTime("18:00-19:00")} />
                    <input type="button" value="19:00-20:00" onClick={() => onChangeTime("19:00-20:00")} />
                    <input type="button" value="20:00-21:00" onClick={() => onChangeTime("20:00-21:00")} />
                </div>
            </div>
            <div id="Info">
                <h4>Info</h4>
                <h5>{date.toLocaleDateString("sv", options)}</h5>
                <h5>{time}</h5>
                <form id="nyBokning" onSubmit={onSubmitHandler}>
                    <label for="fname">Förnamn </label>
                    <input type="text" id="fname" name="fname" placeholder="Förnamn" title="Skriv in ditt namn" pattern="\b([A-ÖÀ-ÿ][-,a-ö. ']+[ ]*)" required />
                    <label for="lname">Efternamn </label>
                    <input type="text" id="lname" name="lname" placeholder="Efternamn" title="Skriv in ditt namn" pattern="\b([A-ÖÀ-ÿ][-,a-ö. ']+[ ]*)" required />
                    <label for="number">Telefonnummer </label>
                    <input type="text" id="number" name="number" placeholder="070-1234567" title="Skriv in ditt mobilnummer" pattern="[0-9]{3}[-][0-9]{7}" required />
                    <label for="email">E-mail </label>
                    <input type="email" id="email" name="email" placeholder="email@domain.se" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Email behöver ett @ följt av en domän." required />
                    <div></div>
                    <input type="submit" id="submit" value="Boka tid"></input>
                </form>

            </div>
        </div>
        );
}

function BanorInfo() {
    return (
        <>
            <h1>Banor</h1>
            <p>
                Nascetur ridiculus mus mauris vitae ultricies leo. Scelerisque fermentum dui faucibus in ornare quam
                viverra. Quis auctor elit sed vulputate mi sit. Dui faucibus in ornare quam viverra orci sagittis. Aenean
                et tortor at risus. Purus non enim praesent elementum facilisis leo vel fringilla. In hendrerit gravida
                rutrum quisque non tellus orci ac. Amet facilisis magna etiam tempor orci eu lobortis elementum. Enim nunc
                faucibus a pellentesque sit. Dictum fusce ut placerat orci nulla pellentesque dignissim. Platea dictumst
                quisque sagittis purus sit amet volutpat consequat. Magna fringilla urna porttitor rhoncus dolor. Ultricies
                lacus sed turpis tincidunt id aliquet risus feugiat in. Laoreet sit amet cursus sit. Risus in hendrerit
                gravida rutrum. Amet dictum sit amet justo donec enim diam vulputate ut.
            </p>
        </>
    );
}



export { Home, OmklInfo, Bastu, BastuInfo, Banor, BanorInfo };