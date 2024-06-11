
package models

// Reference represents a Reference model.
type Reference struct {
  Ref string `json:"$ref,omitempty"`
  AdditionalProperties map[string]interface{} `json:"-,omitempty"`
}