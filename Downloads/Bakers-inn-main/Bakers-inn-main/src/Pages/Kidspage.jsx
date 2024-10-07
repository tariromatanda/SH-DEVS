import React from 'react'
import kids from '../bakers-inn-resourses/Kid’s Corner.png'
import game from '../bakers-inn-resourses/kids people.png'
import maze from '../bakers-inn-resourses/maze.png'
import kid from '../bakers-inn-resourses/way.png'
import paceman from '../bakers-inn-resourses/pacman.png'
import { Link } from 'react-router-dom'


const Kidspage = () => {
    return (
       

        <div className="container">

            <section className="row kidshero">
                <div className="col-md-4">
                    <img src={kids} class="img" alt="" />
                </div>
                <div className="col-md-8">
                    <img src={game} alt="" />
                </div>
            </section>

            <section className="maze">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Spaceship Maze
                        </h1>
                        <p>Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location. </p><p>

                            Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.</p><button class="btn button">PLAY GAME</button></div>
                    <div className="col-md-6">   <img src={maze} alt="" /></div>
                </div>
            </section>

            <section className="riskway">
                <div className="row">
                    <div className="col-md-6"><h1>Risky Way </h1><p>Risky Way is a free instant game. The highways of the future are risky and if you want to survive you'll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive you'll have to know when to click, how long to hold, and only let go at the appropriate time.</p><button className='btn button'>PLAY GAME</button></div>
                    <div className="col-md-6"> <img src={kid} alt="" /></div>
                </div>
            </section>

            <section className="pacman">
                <div className="row">
                    <div className="col-md-6"><h1>Pacman</h1><p>There's nothing like a little old school Pacman game right? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began.</p><button class="btn button">PLAY GAME</button></div>
                    <div className="col-md-6"> <img src={paceman} alt="" /></div>
                </div>
            </section>
        </div>
    )
}

export default Kidspage
