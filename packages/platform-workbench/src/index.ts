//
// Copyright © 2020 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { plugin, Service, Plugin } from '@anticrm/platform'
import core, { Ref, Class, Doc, Instance } from '@anticrm/platform-core'
import ui, { AnyComponent } from '@anticrm/platform-ui'


export enum ViewModelKind {
  NEW_FORM = 0,
}

/**
 * ViewModel describes confguration of a Workbench View
 */
export interface ViewModel {
  kind: ViewModelKind
  component: AnyComponent
  content: Doc
}

export interface WorkbenchState {
  mainView: ViewModel | undefined
}

export const WorkbenchStateInjectionKey = Symbol('workbenchState')

export interface WorkbenchService extends Service {
  getViewModel (_class: Ref<Class<Doc>>, kind: ViewModelKind): Promise<ViewModel>
}

export interface MainModel extends ViewModel {

}

export default plugin('workbench' as Plugin<WorkbenchService>, {
  core: core.id,
  ui: ui.id,
}, {
  component: {
    Workbench: '' as AnyComponent
  }
})
