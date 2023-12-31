
# To understand HOW ORM & Migration Works:

- **Basic Folder Structure:** Organized directory layout for a clean and scalable project.

- **Database Connectivity:** Seamless integration with MySQL using Sequelize, offering robust success and error handling for database interactions.

- **Essential Packages:** Integration of fundamental Node.js packages to enhance the development experience.

- **Index.js Configuration:** Setup of the main entry point file, providing a solid foundation for server initialization.

- **Basic Models:** Pre-configured models for User and Role, facilitating a quick start to building user-centric applications.

- **Git Configuration:** Initial Git setup with a .gitignore file tailored for Node.js projects, ensuring that unnecessary files are excluded from version control.


## Getting Started

1. **Clone the Repository:**

```
git clone <your-repo-url>
```


2. **Install Dependencies:**
```
npm install
```

3. **Database Setup:**
- Configure your database connection details in the `config/config.js` file.
- Run Sequelize migrations to set up the database schema, make sure you have created model manually:
  ```
  npx sequelize-cli db:migrate
  ```

4. **Start the Server:**
```
npm Start
```