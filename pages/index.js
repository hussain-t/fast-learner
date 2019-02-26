import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch(`https://lexcampus.on-its-way.com/wp-json/ldlms/v1/sfwd-courses/`);
    const courses = await res.json();
    return { courses };
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        {courses.map(course => 
          <h1
            key={course.id}
            dangerouslySetInnerHTML={{ __html: course.title.rendered }} 
          />
        )}
      </div>
    )
  }
}

export default Index;
