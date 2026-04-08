import React, { Component, useState, useEffect, setState } from "react";
import musicService from '../../../services/music-group-service';

export function ReadWebApiFunc07() {

  const [wapiInfo, setWapiInfo] = useState({});
  const service = new musicService(`https://music.api.public.seido.se/api`);

  useEffect(() => {
    //equvalent to componentDidMount
    console.log('componentDidMount');

    (async () => {

      const service = new musicService(`https://music.api.public.seido.se/api`);
      const info = await service.readInfoAsync();
      setWapiInfo(info);
    })()

  },[]);
  
/*
  No dependency array: The effect runs after every render. useEffect(() => { // Runs on every render });
  Empty dependency array: The effect runs only once after the initial render. useEffect(() => { // Runs only on the first render }, []);
  Specific dependencies: The effect runs when any of the specified dependencies change. useEffect(() => { // Runs on the first render and whenever 'prop' or 'state' changes }, [prop, state]);
*/

  const onClick = async () => {

    const info = await service.readInfoAsync();
    setWapiInfo(info);
    console.log('Clicked refesh button in func component');
  }

    return (
      <div>
      <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {wapiInfo?.item?.db?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {wapiInfo?.item?.db?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {wapiInfo?.item?.db?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {wapiInfo?.item?.db?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {wapiInfo?.item?.db?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {wapiInfo?.item?.db?.nrUnseededArtists} </li>
        </ul>
        <button onClick={onClick}>Refresh</button>
    </div>
  );
}


export class ReadWebApiClass07 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    this.service = new musicService(`https://music.api.public.seido.se/api`);

    //states, in class component, initialized, here with an empty object
    this.state = {wapiInfo: {}}

    //Eventhandler, in class component
    this.onClick = this.onClick.bind(this);
  }

  //Eventhandler, in class
  async onClick(e) {
    const info = await this.service.readInfoAsync();

    this.setState({wapiInfo: info});
    console.log('Clicked refesh button in class component');
  }

  componentDidMount() {
    console.log('componentDidMount');

    //package the async in an async iffy
    //Immediately-Invoked Function Expressions (IIFE), pronounced "iffy"
    //(async () => {})()
    (async () => {
      console.log('componentDidMount');
      
      const service = new musicService(`https://music.api.public.seido.se/api`);
      const info = await service.readInfoAsync();
      this.setState({wapiInfo: info});
    })();
  }

  render() {
    return (
      <div>
        <h1>WebApi info</h1>
        <ul>
          <li>nrSeededMusicGroups: {this.state.wapiInfo?.db?.nrSeededMusicGroups} </li>
          <li>nrUnseededMusicGroups: {this.state.wapiInfo?.db?.nrUnseededMusicGroups} </li>
          <li>nrSeededAlbums: {this.state.wapiInfo?.db?.nrSeededAlbums} </li>
          <li>nrUnseededAlbums: {this.state.wapiInfo?.db?.nrUnseededAlbums} </li>
          <li>nrSeededArtists: {this.state.wapiInfo?.db?.nrSeededArtists} </li>
          <li>nrUnseededArtists: {this.state.wapiInfo?.db?.nrUnseededArtists} </li>
        </ul>
        <button onClick={this.onClick}>Refresh</button>
      </div>
    )
  }
}
