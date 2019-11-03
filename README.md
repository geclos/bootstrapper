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
A small caveat: your projets are run within docker containers so dependencies
should not be installed from the host unless you want to end up with a nice
mess. The easiest ways to install a new dependency are:
- Modify your Gemfile of package.json files and rebuild the images with `docker-compose build`
- Install at runtime with `docker-compose run <frontend|backend> <YOUR_DEPENDENCY_INSTALLATION_COMMAND>`

Happy coding!
