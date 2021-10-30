import react from 'react';

class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1,
    }
  }

  clickAdd = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    })

    // this.setState(this.state)

  }

  render(){
    console.log('test组件执行了吗====');

    // const {
    //   count,
    // } = this.state;

    // return(
    //   <div>
    //     {count}
    //     <button onClick={this.clickAdd}> +1</button>


    //     <a
    //       onclick="turnToSyS2('http://dbs.zh821.com/ops/login/org.gocom.components.coframe.auth.login.login.flow?userId=17001906&password=000000&retCode=1')"
    //       value="491d19e9a173ca41"
    //     >
    //   </div>
    // )

    const { count } = this.state;
  }
}

export default Test;