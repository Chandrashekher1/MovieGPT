import OpenAI from 'openai';
import { OpenAi_key} from './constants';

const openAi = new OpenAI({
  apiKey: OpenAi_key,
  dangerouslyAllowBrowser: true,
});

export default openAi;
