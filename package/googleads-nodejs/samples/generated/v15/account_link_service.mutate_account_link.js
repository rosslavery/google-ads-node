// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(customerId, operation) {
  // [START googleads_v15_generated_AccountLinkService_MutateAccountLink_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer being modified.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The operation to perform on the link.
   */
  // const operation = {}
  /**
   *  If true, successful operations will be carried out and invalid
   *  operations will return errors. If false, all operations will be carried
   *  out in one transaction if and only if they are all valid.
   *  Default is false.
   */
  // const partialFailure = true
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {AccountLinkServiceClient} = require('google-ads').v15;

  // Instantiates a client
  const googleadsClient = new AccountLinkServiceClient();

  async function callMutateAccountLink() {
    // Construct request
    const request = {
      customerId,
      operation,
    };

    // Run request
    const response = await googleadsClient.mutateAccountLink(request);
    console.log(response);
  }

  callMutateAccountLink();
  // [END googleads_v15_generated_AccountLinkService_MutateAccountLink_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));