import { Api } from 'Api/Api';

export const App = props => {
  return (
    <div>
      <button onClick={() => Api.fetchDog(props.dispatch)}>Show Dog</button>
      {this.props.loading ? (
        <p>Loading...</p>
      ) : this.props.error ? (
        <p>Error, try again</p>
      ) : (
        <p>
          <img src={this.props.url} alt="dog" />
        </p>
      )}
    </div>
  );
};
