/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
    /**
     * Verify assigning an uninitialized local variable to outputNumber's value attribute.
     */
    testUninitializedValue:{
        test:function(cmp){
            var testOutputNumberCmp = cmp.find('uninitializedVariable');
            aura.test.assertNotNull(testOutputNumberCmp);
            aura.test.assertEquals('', $A.test.getText(testOutputNumberCmp.find('span').getElement()), "Should have displayed a blank value.");
        }
    }
})
