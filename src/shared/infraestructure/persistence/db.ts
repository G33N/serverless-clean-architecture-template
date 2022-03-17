import { Connection, createConnection } from 'mongoose';
import { Logger } from 'src/framework/logger';
import { LoggerScope } from 'src/framework/contracts';

let conn: Connection | null = null;

const uri = 'YOUR CONNECTION STRING HERE';

const functionName = 'getConnection';

/**
 * Get connection
 *
 * @returns {Promise<Connection>}
 */
export const getConnection = async () => {
  const logger = new Logger(functionName, LoggerScope.Framework);
  logger.info({ message: `The function '${functionName}' was invoked` });

  // Because `conn` is in the global scope, Lambda may retain it between
  // function calls thanks to `callbackWaitsForEmptyEventLoop`.
  // This means your Lambda function doesn't have to go through the
  // potentially expensive process of connecting to MongoDB every time.
  if (conn == null) {
    logger.info({ message: 'using new database connection' });

    conn = createConnection(uri, {
      // Buffering means mongoose will queue up operations if it gets
      // disconnected from MongoDB and send them when it reconnects.
      // With serverless, better to fail fast if not connected.
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
    });

    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
    // conn.model('Test', new mongoose.Schema({ name: String }));
  } else {
    logger.info({ message: 'using existing database connection' });
  }

  // const M = conn.model('Test');

  // const doc = await M.findOne();
  // console.log(doc);

  return conn;
};
