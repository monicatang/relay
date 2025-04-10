/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<0d585c3944b7bfe14073570fe8925759>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type RelayReaderRequiredFieldsTest14Query$variables = {|
  skip: boolean,
|};
export type RelayReaderRequiredFieldsTest14Query$data = {|
  +me: ?{|
    +emailAddresses?: $ReadOnlyArray<?string>,
  |},
|};
export type RelayReaderRequiredFieldsTest14Query = {|
  response: RelayReaderRequiredFieldsTest14Query$data,
  variables: RelayReaderRequiredFieldsTest14Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skip"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emailAddresses",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayReaderRequiredFieldsTest14Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "condition": "skip",
            "kind": "Condition",
            "passingValue": false,
            "selections": [
              {
                "kind": "RequiredField",
                "field": (v1/*: any*/),
                "action": "LOG"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RelayReaderRequiredFieldsTest14Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "condition": "skip",
            "kind": "Condition",
            "passingValue": false,
            "selections": [
              (v1/*: any*/)
            ]
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bb54ff12863827eb2d8a24ba230902db",
    "id": null,
    "metadata": {},
    "name": "RelayReaderRequiredFieldsTest14Query",
    "operationKind": "query",
    "text": "query RelayReaderRequiredFieldsTest14Query(\n  $skip: Boolean!\n) {\n  me {\n    emailAddresses @skip(if: $skip)\n    id\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "2c11aae5845b769b18eea9e4fbed5799";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayReaderRequiredFieldsTest14Query$variables,
  RelayReaderRequiredFieldsTest14Query$data,
>*/);
