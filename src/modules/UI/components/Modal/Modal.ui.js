import React, { Component } from 'react'
import strings from '../../../../locales/default'
import {sprintf} from 'sprintf-js'
import { View, Text, Platform} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './style'
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient'
import FormattedText from '../FormattedText'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import MAIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {border as b} from '../../../../util/border'

class StylizedModal extends Component {
  render () {
    return (
      <Modal style={[styles.topLevelModal, {marginLeft: 20, marginRight: 20, marginTop: 20}, b('yellow')]}
        isVisible={this.props.visibilityBoolean}>
        <View style={[styles.modalBox, b('red')]}>
          <View style={[styles.modalBody, b('purple')]}>
            <View style={[styles.modalTopTextWrap,  b('blue')]}>
              <FormattedText style={[styles.modalTopText, b('yellow')]}>{sprintf(strings.enUS[this.props.headerText])}</FormattedText>
              {this.props.headerSubtext &&
                <FormattedText style={[styles.modalTopSubtext, b('green')]}
                  numberOfLines={2}>
                  {this.props.headerSubtext || ''}
                </FormattedText>
              }
              

            </View>
            {this.props.modalMiddle &&
              <View style={[styles.modalMiddle, b('brown')]}>
                {this.props.modalMiddle}
              </View>
            }
            {this.props.modalBottom &&
            <View style={[styles.modalBottom, b('green')]}>
              {this.props.modalBottom}
            </View>
            }
          </View>
        </View>

        <LinearGradient style={[styles.modalHeaderIconWrapBottom]}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={['#3B7ADA', '#2B5698']}>
          <View style={styles.modalHeaderIconWrapTop}>
            {this.props.featuredIcon}
          </View>
        </LinearGradient>
      </Modal>
    )
  }
}

StylizedModal.propTypes = {
  visibilityBoolean: PropTypes.bool
}

export default connect()(StylizedModal)
