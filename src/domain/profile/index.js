import buildMakeProfile from './profile';
import Id from '../../infrastructure/post/Id';
import validator from '../../infrastructure/post/validator';
import errors from '../errors';
import { Either, left, right } from '../../shared/either/index';

const makeProfile = buildMakeProfile({
  Id,
  validator,
  Either,
  left,
  right,
  errors,
});

export default makeProfile;
