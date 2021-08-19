import { BodyValidatorInterface, UseCaseInterface } from 'src/framework/contracts';
import { basicSqsHandler } from 'src/framework/controllers/sqs';
import { validateSchema } from 'src/framework/libs/validateSchema';
import { bodyParser } from 'src/framework/libs/bodyParser';
import { useCaseWorld } from './useCases/world';
import { worldSchema } from './schemas/validationSchemas';
import { WorldMessage } from './entities/worldMessage';

const useCase: UseCaseInterface<WorldMessage> = useCaseWorld();
const customBodyValidator: BodyValidatorInterface = validateSchema(worldSchema);
const parseBody = bodyParser(WorldMessage, customBodyValidator);

export const main = basicSqsHandler(parseBody, useCase);
