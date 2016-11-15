const IGNORED_ERRORS = [
  'TransitionAborted'
];

export default function doNotifyError(error) {
  return !error || IGNORED_ERRORS.indexOf(error.name) === -1;
}
