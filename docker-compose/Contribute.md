## Manual Installation

1. **Install Node.js**

   * Download and install the latest LTS version of Node.js from the official website.
   * Verify the installation:

     ```bash
     node -v
     npm -v
     ```

2. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   * Create a `.env` file in the project root.
   * Copy the contents from `.env.example` (if available) and update the required values.

5. **Start the Database**

   * If using Docker:

     ```bash
     docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
     ```
   * Alternatively, use your locally installed PostgreSQL instance.

6. **Run Prisma Migrations**

   ```bash
   npx prisma migrate dev
   ```

7. **Generate the Prisma Client**

   ```bash
   npx prisma generate
   ```

8. **Start the Development Server**

   ```bash
   npm run dev
   ```

9. **Verify the Application**

   * Open your browser and navigate to the URL displayed in the terminal (typically `http://localhost:3000` or the port configured by your project).


## docker installtion

 - install docker 
 - create a network ' docker network create user_project ' 
 - start postgres
    - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - build the image - 'docker build --network=host -t user-project .'
 - start the image - 'docker run \
  -e DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres?schema=public" \
  --network user_project \
  -p 3000:3000 \
  user-project'

## docker compose installtion steps
 - install docker , docker-compose
 - Run ' docker-compose up '
