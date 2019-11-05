# Bootstrapper
:warning: This project is heavily opinionated :warning:

Scaffolding to jumpstart your full stack projects. It includes
backend and frontend, as well as a database. Everything containerized and
managed with `docker-compose` and Traefik for routing.

The stack:
- Rails 6
- create-react-app
- PostgreSQL

## Development
The first time you'll need to build your Docker images: `docker-compose build`
(or `docker-compose up --build` for the brave).

Once building is complete, run your project with: `docker-compose up`.

- Frontend will be available at `frontend.localhost`
- Backend will be available at `backend.localhost`

Both the backend and frontend folders are linked to their respective containers
so you can start coding directly from the host.

Once you are done, you can simply close everything via the `docker-compose down`
command.

### Dependencies
A small caveat: your projets are run within Docker containers so dependencies
should not be installed from the host unless you want to end up with a nice
mess. The easiest way to install a new dependency is to add it to your
package.json or Gemfile and then rebuild the Docker container.

### Running Rails/Rake commands
Most Rails/Rake commands should be run from inside the container. You can do
this at runtime with the `run` command, as such:
`docker-compose run backend <YOUR_COMMAND>`

Happy coding!
