import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import strings from "src/locales";

const ROUTES = [
  { pattern: /\//, href: () => "/", title: () => strings.classrooms },
  {
    pattern: /\/classrooms\/(\d+)/,
    href: (id) => `/classrooms/${id}`,
    title: (id) => `${strings.studentsOf} #${id}`
  },
  {
    pattern: /\/classrooms\/(\d+)\/students\/(\d+)/,
    href: (classroomId, studentId) =>
      `/classrooms/${classroomId}/students/${studentId}`,
    title: (classroomId, studentId) => `${strings.submissionsOf} #${studentId}`
  }
];

class Breadcrumbs extends React.Component {
  render() {
    const { currentPath } = this.props;
    const matchingRoutes = ROUTES.filter((it) => it.pattern.test(currentPath));

    return (
      <Fragment>
        {matchingRoutes.map((route, i) => {
          const params = currentPath.match(route.pattern).slice(1);
          const title = route.title.apply(route, params);
          const href = "#" + route.href.apply(route, params);

          return (
            <Fragment key={i}>
              <Nav.Link href={href}>{title}</Nav.Link>
              {i < matchingRoutes.length - 1 && (
                <Navbar.Brand style={{ marginRight: 0 }}>
                  <FeatherIcon icon="chevron-right" />
                </Navbar.Brand>
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ router }) => ({
  currentPath: router.location.pathname
});

export default connect(mapStateToProps)(Breadcrumbs);
