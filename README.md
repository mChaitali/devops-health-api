# Week 1 - Build a Health API (Node.js)

This is a Node.js implementation of the Week 1 Health API assignment.

The assignment requires `GET /health`, a response containing status/timestamp/version/environment, structured startup/request logs, unit tests including an edge case, README setup/run/test instructions, and failure-drill evidence.

## Tech stack

- Node.js
- Express
- Jest
- Supertest

## Requirements

- Node.js 18+ recommended
- npm

## Setup

```bash
git clone <your-repository-url>
cd health-api-node
npm install
```

Optional environment configuration:

```bash
cp .env.example .env
```

The application also works without a `.env` file.

## Run

```bash
npm start
```

Expected startup log:

```json
{"timestamp":"...","event":"server.started","port":3000,"environment":"development","version":"1.0.0"}
```

The API is available at:

`http://localhost:3000/health`

## Development mode

```bash
npm run dev
```

## Test

```bash
npm test
```

The test suite covers:

1. Happy path: `GET /health` returns HTTP 200 and the required fields.
2. Edge/negative case: an unsupported endpoint returns HTTP 404 with a structured error response.

## Sample response

```json
{
  "status": "ok",
  "timestamp": "2026-08-10T12:00:00.000Z",
  "version": "1.0.0",
  "environment": "development"
}
```

`timestamp` will be generated at request time.

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `3000` | HTTP server port |
| `APP_VERSION` | `1.0.0` | API/application version |
| `NODE_ENV` | `development` | Runtime environment |

## Structured logs

The service emits JSON logs for:

- Server startup
- Completed HTTP requests
- Request method
- Request path
- HTTP status
- Request duration in milliseconds

Example:

```json
{"timestamp":"...","event":"request.completed","method":"GET","path":"/health","statusCode":200,"durationMs":3}
```

## Failure Drill

The assignment asks for one intentionally broken test, evidence of the failure, and the subsequent fix.

Suggested local drill:

1. Change the happy-path assertion temporarily from:
   `expect(response.statusCode).toBe(200);`
   to:
   `expect(response.statusCode).toBe(500);`
2. Run:
   ```bash
   npm test
   ```
3. Capture the failing test output.
4. Restore the assertion to `200`.
5. Run:
   ```bash
   npm test
   ```
6. Capture the passing output.
7. Commit the fix with a clear message, for example:
   `fix: restore health endpoint test expectation`

Do not commit the intentionally broken test.

## Evidence Pack

For submission, capture:

- Test output screenshot/log showing passing tests
- Sample `/health` response
- Failure drill before/after screenshots
- Short reflection

### Sample reflection

I implemented the health endpoint with a small Express structure and kept the response contract stable. I added structured JSON logs for startup and completed requests so local behavior is easy to inspect. I also added a negative test for unsupported routes. The failure drill demonstrated that the test suite catches a broken expectation before the fix is committed.

## Definition of Done

- `/health` contract is implemented and stable
- Unit tests pass locally
- At least one edge/negative case is tested
- Structured logs are visible during local run
- README includes setup, run, test, and sample response
- Failure drill evidence can be added to the submission

## Review question

Can a new team member run this service in under 10 minutes using only this README?
