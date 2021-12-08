import React from "react";

const USERS = [
    { id: 1, name: 'Andy', age: 32, gender: 'male', fitness_level: 'beginner' },
    { id: 2, name: 'Bob', age: 30, gender: 'male', fitness_level: 'advanced' },
    { id: 3, name: 'Chris', age: 40, gender: 'male', fitness_level: 'intermediate' },
    { id: 4, name: 'Ashley', age: 22, gender: 'female', fitness_level: 'beginner' },
    { id: 5, name: 'Kylie', age: 30, gender: 'female', fitness_level: 'intermediate'  },
    { id: 6, name: 'Anna', age: 68, gender: 'female', fitness_level: 'beginner'},
    { id: 7, name: 'Sean', age: 34, gender: 'male', fitness_level: 'advanced'} ,
    { id: 8, name: 'Brianna', age: 18, gender: 'female', fitness_level: 'advanced' },
    { id: 9, name: 'Justin', age: 23, gender: 'male', fitness_level: 'intermediate' },
];
function Filter () {
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(USERS);
  
    const filter = (e) => {
      const keyword = e.target.value;

      return (
        <div className="container">
          <input
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Filter"
          />
    
          <div className="user-list">
            {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map((user) => (
                <li key={user.id} className="user">
                  <span className="user-id">{user.id}</span>
                  <span className="user-name">{user.name}</span>
                  <span className="user-age">{user.age} year old</span>
                  <span className="user-gender">{user.gender}</span>
                  <span className="user-fitness-level">{user.fitness-level}</span>
                </li>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </div>
      );
    }
}
  
  
  
  
  
  
  
  
    export default Filter;